import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class DataService {
    equipments: any[] = [];
    materials: any[] = [];
    allItems = new BehaviorSubject<any>({});

    constructor(private $api: ApiService) {
        this.getEquipments();
        this.getMaterials();
        this.getHTML();
    }

    getEquipments() {
        return this.$api.get('assets/json/equipments.json', {}, '', true).then((data: any[]) => {
            this.equipments = data;
            this.setItems();
            return this.equipments;
        });
    }

    getMaterials() {
        return this.$api.get('assets/json/materials.json', {}, '', true).then((data: any[]) => {
            this.materials = data;
            this.setItems();
            return this.materials;
        });
    }

    setItems() {
        const items = {};
        this.equipments.forEach(item => {
            items[item.id] = item;
        });
        this.materials.forEach(item => {
            items[item.id] = item;
        });
        this.allItems.next(items);
    }

    getHTML() {
        const array = [
            this.$api.get('https://vikings.help/en/resources/equipment/322/', {}, 'text', true),
            this.$api.get('https://vikings.help/en/resources/equipment/323/', {}, 'text', true)
        ];
        const result = {};

        forkJoin(array).subscribe(results => {
            results.forEach((res: any) => {
                const item = this.parseHTML(res);
                result[item['id']] = item;
            });
            console.log(result);
        });
    }

    parseHTML(html) {
        const item = {};
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(html, 'text/html');
        const mainDetails = parsedHtml.querySelector('table.gemMainDetail.lines');
        const detailImgURL = parsedHtml.querySelector('.detailImg img').getAttribute('data-img');
        const infoDiv = parsedHtml.querySelector('.table-responsive.eqInfoDiv table.table.lines.mainTable:not(.fixed-column)');
        const infoDivArray = Array.from(infoDiv.querySelectorAll('tr'));

        item['id'] = detailImgURL.substring(detailImgURL.lastIndexOf('/') + 1).replace(/[^0-9]/g, '');
        item['heroLevel'] = getElementsByText('Hero Level', 'td', parsedHtml)[0].nextSibling.children[0].innerText;
        item['time'] = getElementsByText('Time', 'td', parsedHtml)[0].nextSibling.innerText;
        item['silver'] = getElementsByText('Silver', 'td', parsedHtml)[0].nextSibling.innerText;
        item['gold'] = getElementsByText('Gold', 'td', parsedHtml)[0].nextSibling.innerText;
        item['statistics'] = {};

        infoDivArray.forEach((infoRow: any, index) => {
            if ( index !== 0 ) {
                const stat = {};
                stat['text'] = infoRow.children[0].innerText;
                stat['1'] = infoRow.children[1].innerText;
                stat['2'] = infoRow.children[2].innerText;
                stat['3'] = infoRow.children[3].innerText;
                stat['4'] = infoRow.children[4].innerText;
                stat['5'] = infoRow.children[5].innerText;
                stat['6'] = infoRow.children[6].innerText;
                item['statistics'][infoRow.children[0].innerText.toLowerCase().replace(/ /g,'_')] = stat;
                console.log(item['statistics']);
            }
        });

        function getElementsByText(str, tag = 'a', doc = document) {
            return Array.prototype.slice.call(doc.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
        }

        return item;
    }
}
