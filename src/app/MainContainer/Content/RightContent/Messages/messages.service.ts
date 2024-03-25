// sidebar-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesDataService {
  private messages = [
    {
      mail: 'pmccoy@flowers.com',
      name: 'Philip Mccoy',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_02.jpg',
      status: 'online',
      delivered: '0/3',
    },
    {
      mail: 'clores@flowers.com',
      name: 'Calvin Flores',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_04.jpg',
      status: 'online',
      delivered: '0/3',
    },
    {
      mail: 'dwight@flowers.com',
      name: 'Dwight Jones',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_05.jpg',
      status: 'offline',
      delivered: '0/3',
    },
    {
      mail: 'flores@flowers.com',
      name: 'Esther Flores',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_11.jpg',
      status: 'offline',
      delivered: '3/3',
    },
    {
      mail: 'gregory@flowers.com',
      name: 'Gregory Bell',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_10.jpg',
      status: 'online',
      delivered: '0/3',
    },
    {
      mail: 'guy@flowers.com',
      name: 'Guy Webb',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_06.jpg',
      status: 'online',
      delivered: '2/3',
    },
    {
      mail: 'pat@flowers.com',
      name: 'Pat Cooper',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_15.jpg',
      status: 'offline',
      delivered: '1/3',
    },
    {
      name: 'Shaeleigh Lopez',
      mail: 'odio@hotmail.com',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_01.jpg',
      status: 'online',
      delivered: '0/3',
    },
    {
      name: 'Craig Pope',
      mail: 'fermentum.metus.aenean@icloud.edu',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_03.jpg',
      status: 'offline',
      delivered: '1/3',
    },
    {
      name: 'Angela Clements',
      mail: 'nonummy.ut@icloud.net',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_07.jpg',
      status: 'offline',
      delivered: '3/3',
    },
    {
      name: 'Howard Villarreal',
      mail: 'libero.donec.consectetuer@icloud.com',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_08.jpg',
      status: 'online',
      delivered: '1/3',
    },
    {
      name: 'Prescott Stafford',
      mail: 'nunc.ac.sem@icloud.edu',
      avatar:
        'https://snippet.dhtmlx.com/codebase/data/common/img/02/avatar_09.jpg',
      status: 'offline',
      delivered: '2/3',
    },
  ];

  getMessages(): Observable<any[]> {
    return of(this.messages);
  }
}
