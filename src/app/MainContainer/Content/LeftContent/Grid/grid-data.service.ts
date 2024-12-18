// sidebar-data.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GridDataService {
  private gridData = [
    {
      time: new Date('Jan 28, 2021'),
      nights: 7,
      price: 68,
      contactPerson: 'Yoshio Slater',
      contactEmail: 'phasellus.fermentum@yahoo.net',
    },
    {
      time: new Date('Apr 13, 2021'),
      nights: 6,
      price: 66,
      contactPerson: 'Christopher Kirk',
      contactEmail: 'posuere.vulputate.lacus@outlook.org',
    },
    {
      time: new Date('Jan 31, 2021'),
      nights: 15,
      price: 64,
      contactPerson: 'Jana Meyers',
      contactEmail: 'mollis@aol.edu',
    },
    {
      time: new Date('Feb 22, 2021'),
      nights: 11,
      price: 57,
      contactPerson: 'Sawyer Smith',
      contactEmail: 'lorem.ipsum.sodales@icloud.org',
    },
    {
      time: new Date('Feb 3, 2021'),
      nights: 10,
      price: 68,
      contactPerson: 'Gabriel Gates',
      contactEmail: 'sollicitudin.a@icloud.com',
    },
    {
      time: new Date('Apr 6, 2021'),
      nights: 7,
      price: 67,
      contactPerson: 'Emily Reynolds',
      contactEmail: 'suspendisse.aliquet@outlook.edu',
    },
    {
      time: new Date('May 22, 2021'),
      nights: 11,
      price: 70,
      contactPerson: 'Xavier Middleton',
      contactEmail: 'eu@icloud.net',
    },
    {
      time: new Date('Jul 9, 2021'),
      nights: 11,
      price: 61,
      contactPerson: 'Tamara Raymond',
      contactEmail: 'vivamus@yahoo.ca',
    },
    {
      time: new Date('Jun 15, 2021'),
      nights: 15,
      price: 61,
      contactPerson: 'Jolene Lamb',
      contactEmail: 'vulputate.posuere@outlook.org',
    },
    {
      time: new Date('Jan 31, 2021'),
      nights: 15,
      price: 70,
      contactPerson: 'David Wilkins',
      contactEmail: 'ipsum@icloud.org',
    },
    {
      time: new Date('Aug 16, 2021'),
      nights: 8,
      price: 65,
      contactPerson: 'Nita Padilla',
      contactEmail: 'quis.pede@google.net',
    },
    {
      time: new Date('Apr 4, 2021'),
      nights: 13,
      price: 73,
      contactPerson: 'Martha Fischer',
      contactEmail: 'elit.pharetra@hotmail.org',
    },
    {
      time: new Date('Jun 7, 2021'),
      nights: 14,
      price: 69,
      contactPerson: 'Rudyard Powell',
      contactEmail: 'ridiculus.mus@aol.com',
    },
    {
      time: new Date('Sep 14, 2021'),
      nights: 11,
      price: 68,
      contactPerson: 'Clementine Mercer',
      contactEmail: 'nec@aol.couk',
    },
    {
      time: new Date('Aug 3, 2021'),
      nights: 14,
      price: 74,
      contactPerson: 'Hu Pace',
      contactEmail: 'phasellus.dolor.elit@hotmail.net',
    },
    {
      time: new Date('Sep 12, 2021'),
      nights: 13,
      price: 73,
      contactPerson: 'Petra James',
      contactEmail: 'luctus.et@yahoo.net',
    },
    {
      time: new Date('Aug 4, 2021'),
      nights: 14,
      price: 60,
      contactPerson: 'Chaney Henson',
      contactEmail: 'in.condimentum@protonmail.net',
    },
    {
      time: new Date('Jul 15, 2021'),
      nights: 13,
      price: 59,
      contactPerson: 'Cole Wallace',
      contactEmail: 'in.aliquet@outlook.org',
    },
    {
      time: new Date('Jan 15, 2021'),
      nights: 13,
      price: 57,
      contactPerson: 'Emmanuel Miller',
      contactEmail: 'pharetra.quisque.ac@aol.edu',
    },
    {
      time: new Date('Sep 18, 2021'),
      nights: 9,
      price: 69,
      contactPerson: 'Uriah Ayers',
      contactEmail: 'nunc.sed.pede@google.net',
    },
    {
      time: new Date('May 24, 2021'),
      nights: 13,
      price: 73,
      contactPerson: 'Illiana Floyd',
      contactEmail: 'rhoncus.nullam@hotmail.ca',
    },
    {
      time: new Date('Jul 4, 2021'),
      nights: 3,
      price: 61,
      contactPerson: 'Cara Merritt',
      contactEmail: 'sagittis@yahoo.ca',
    },
    {
      time: new Date('Jan 27, 2021'),
      nights: 4,
      price: 70,
      contactPerson: "Yetta O'Neill",
      contactEmail: 'nullam@aol.net',
    },
    {
      time: new Date('Aug 16, 2021'),
      nights: 9,
      price: 63,
      contactPerson: 'Chadwick Holland',
      contactEmail: 'congue.turpis@aol.net',
    },
    {
      time: new Date('Mar 22, 2021'),
      nights: 3,
      price: 59,
      contactPerson: 'Nell Copeland',
      contactEmail: 'nulla.vulputate@google.edu',
    },
    {
      time: new Date('Feb 26, 2021'),
      nights: 14,
      price: 74,
      contactPerson: 'Vivian Fletcher',
      contactEmail: 'bibendum.ullamcorper@icloud.net',
    },
    {
      time: new Date('Jun 26, 2021'),
      nights: 11,
      price: 58,
      contactPerson: 'Tatiana Mckay',
      contactEmail: 'ac.arcu@hotmail.ca',
    },
    {
      time: new Date('Jul 30, 2021'),
      nights: 9,
      price: 61,
      contactPerson: 'Jamalia Mitchell',
      contactEmail: 'sed.id.risus@aol.edu',
    },
    {
      time: new Date('Jun 15, 2021'),
      nights: 13,
      price: 66,
      contactPerson: 'Hedy Kirby',
      contactEmail: 'praesent.luctus@hotmail.com',
    },
    {
      time: new Date('Aug 16, 2021'),
      nights: 9,
      price: 67,
      contactPerson: 'Solomon Ortiz',
      contactEmail: 'sem.vitae@yahoo.com',
    },
    {
      time: new Date('Jul 15, 2021'),
      nights: 3,
      price: 67,
      contactPerson: "Adrienne O'Neill",
      contactEmail: 'dapibus.gravida@protonmail.ca',
    },
    {
      time: new Date('Jul 1, 2021'),
      nights: 7,
      price: 72,
      contactPerson: 'Alma Rollins',
      contactEmail: 'orci@protonmail.ca',
    },
    {
      time: new Date('Jul 22, 2021'),
      nights: 11,
      price: 74,
      contactPerson: 'Gregory Boyd',
      contactEmail: 'curabitur.consequat.lectus@yahoo.net',
    },
    {
      time: new Date('Apr 24, 2021'),
      nights: 8,
      price: 74,
      contactPerson: 'Damon Curry',
      contactEmail: 'aliquam.fringilla@hotmail.org',
    },
    {
      time: new Date('Mar 8, 2021'),
      nights: 5,
      price: 63,
      contactPerson: 'Imelda Tyson',
      contactEmail: 'nunc.interdum@icloud.edu',
    },
    {
      time: new Date('Apr 13, 2021'),
      nights: 8,
      price: 57,
      contactPerson: 'Yen Cannon',
      contactEmail: 'nunc@outlook.couk',
    },
    {
      time: new Date('Feb 27, 2021'),
      nights: 5,
      price: 73,
      contactPerson: 'Olivia Patterson',
      contactEmail: 'posuere@google.org',
    },
    {
      time: new Date('Apr 21, 2021'),
      nights: 13,
      price: 59,
      contactPerson: 'Ramona Logan',
      contactEmail: 'est@hotmail.ca',
    },
    {
      time: new Date('Jul 8, 2021'),
      nights: 4,
      price: 67,
      contactPerson: 'Risa Butler',
      contactEmail: 'suscipit.est.ac@yahoo.net',
    },
    {
      time: new Date('Feb 19, 2021'),
      nights: 3,
      price: 71,
      contactPerson: 'Charity Price',
      contactEmail: 'lobortis.augue.scelerisque@protonmail.couk',
    },
    {
      time: new Date('Feb 23, 2021'),
      nights: 15,
      price: 59,
      contactPerson: 'Rina Macdonald',
      contactEmail: 'quisque@outlook.com',
    },
    {
      time: new Date('Apr 8, 2021'),
      nights: 16,
      price: 68,
      contactPerson: 'Travis Steele',
      contactEmail: 'natoque.penatibus@google.edu',
    },
    {
      time: new Date('Apr 30, 2021'),
      nights: 9,
      price: 64,
      contactPerson: 'Deanna Reyes',
      contactEmail: 'dolor@hotmail.net',
    },
    {
      time: new Date('Feb 15, 2021'),
      nights: 14,
      price: 67,
      contactPerson: 'Faith Rojas',
      contactEmail: 'sagittis.duis.gravida@hotmail.edu',
    },
    {
      time: new Date('Mar 1, 2021'),
      nights: 4,
      price: 73,
      contactPerson: 'Hyacinth Fuentes',
      contactEmail: 'nec.urna@google.com',
    },
    {
      time: new Date('May 9, 2021'),
      nights: 2,
      price: 71,
      contactPerson: 'Brenden Sloan',
      contactEmail: 'a.dui.cras@google.net',
    },
    {
      time: new Date('Feb 17, 2021'),
      nights: 8,
      price: 74,
      contactPerson: 'Nora Bruce',
      contactEmail: 'egestas.blandit@google.org',
    },
    {
      time: new Date('Jul 20, 2021'),
      nights: 10,
      price: 68,
      contactPerson: 'Riley Harrison',
      contactEmail: 'lacus@outlook.ca',
    },
    {
      time: new Date('May 24, 2021'),
      nights: 12,
      price: 74,
      contactPerson: 'Mariko Lewis',
      contactEmail: 'volutpat@google.couk',
    },
    {
      time: new Date('Feb 16, 2021'),
      nights: 2,
      price: 68,
      contactPerson: 'Todd Jones',
      contactEmail: 'cras.eu.tellus@icloud.org',
    },
    {
      time: new Date('Apr 21, 2021'),
      nights: 16,
      price: 69,
      contactPerson: 'Tasha Mcleod',
      contactEmail: 'quam.a@protonmail.org',
    },
    {
      time: new Date('Aug 28, 2021'),
      nights: 10,
      price: 74,
      contactPerson: 'Fletcher Bird',
      contactEmail: 'tincidunt@yahoo.com',
    },
    {
      time: new Date('Apr 19, 2021'),
      nights: 3,
      price: 57,
      contactPerson: 'Alan Murphy',
      contactEmail: 'tempor.erat.neque@icloud.com',
    },
    {
      time: new Date('Jan 26, 2021'),
      nights: 13,
      price: 71,
      contactPerson: 'Hakeem Booth',
      contactEmail: 'porttitor.tellus@hotmail.com',
    },
    {
      time: new Date('Feb 4, 2021'),
      nights: 11,
      price: 67,
      contactPerson: 'Courtney Sellers',
      contactEmail: 'penatibus.et@outlook.ca',
    },
    {
      time: new Date('Jul 28, 2021'),
      nights: 11,
      price: 67,
      contactPerson: 'Frances Mcdonald',
      contactEmail: 'libero.dui@aol.org',
    },
    {
      time: new Date('Jan 24, 2021'),
      nights: 6,
      price: 72,
      contactPerson: 'Devin Mathews',
      contactEmail: 'proin.nisl.sem@google.couk',
    },
    {
      time: new Date('May 13, 2021'),
      nights: 10,
      price: 71,
      contactPerson: 'Arden Sparks',
      contactEmail: 'arcu.sed@google.edu',
    },
    {
      time: new Date('Apr 1, 2021'),
      nights: 2,
      price: 55,
      contactPerson: 'Roanna Calhoun',
      contactEmail: 'nisi.aenean@outlook.edu',
    },
    {
      time: new Date('Feb 9, 2021'),
      nights: 12,
      price: 66,
      contactPerson: 'Zeph Ellis',
      contactEmail: 'nonummy.ipsum.non@aol.org',
    },
    {
      time: new Date('Jun 10, 2021'),
      nights: 10,
      price: 73,
      contactPerson: 'Harriet Lee',
      contactEmail: 'mauris.quis@aol.edu',
    },
    {
      time: new Date('Jan 25, 2021'),
      nights: 7,
      price: 60,
      contactPerson: 'Chanda Gay',
      contactEmail: 'egestas.blandit.nam@yahoo.ca',
    },
    {
      time: new Date('Aug 22, 2021'),
      nights: 12,
      price: 56,
      contactPerson: 'Tiger Roman',
      contactEmail: 'et@aol.org',
    },
    {
      time: new Date('Aug 6, 2021'),
      nights: 13,
      price: 59,
      contactPerson: 'Yuri Booker',
      contactEmail: 'pretium.neque@google.ca',
    },
    {
      time: new Date('Apr 12, 2021'),
      nights: 7,
      price: 56,
      contactPerson: 'Blaze Gardner',
      contactEmail: 'sed.leo@aol.ca',
    },
    {
      time: new Date('Jun 13, 2021'),
      nights: 4,
      price: 73,
      contactPerson: 'Vanna Nieves',
      contactEmail: 'amet.consectetuer@google.edu',
    },
    {
      time: new Date('May 8, 2021'),
      nights: 4,
      price: 58,
      contactPerson: 'Malik Mullins',
      contactEmail: 'pede.nec@yahoo.org',
    },
    {
      time: new Date('Apr 25, 2021'),
      nights: 5,
      price: 60,
      contactPerson: 'Sarah Goodwin',
      contactEmail: 'condimentum.eget@icloud.couk',
    },
    {
      time: new Date('Jan 13, 2021'),
      nights: 5,
      price: 73,
      contactPerson: 'Nigel Griffin',
      contactEmail: 'ornare@yahoo.edu',
    },
    {
      time: new Date('Mar 25, 2021'),
      nights: 6,
      price: 67,
      contactPerson: 'Lysandra Gregory',
      contactEmail: 'in.ornare@protonmail.edu',
    },
    {
      time: new Date('Sep 28, 2021'),
      nights: 8,
      price: 70,
      contactPerson: 'Breanna Williamson',
      contactEmail: 'nulla.integer@yahoo.ca',
    },
    {
      time: new Date('Feb 10, 2021'),
      nights: 5,
      price: 61,
      contactPerson: 'Edward Black',
      contactEmail: 'lobortis.mauris@icloud.couk',
    },
    {
      time: new Date('Jul 28, 2021'),
      nights: 5,
      price: 56,
      contactPerson: 'Imogene Stafford',
      contactEmail: 'donec@icloud.net',
    },
    {
      time: new Date('Aug 7, 2021'),
      nights: 15,
      price: 56,
      contactPerson: 'Clark Garcia',
      contactEmail: 'sed.leo@hotmail.com',
    },
    {
      time: new Date('Sep 6, 2021'),
      nights: 6,
      price: 55,
      contactPerson: 'Uma Tate',
      contactEmail: 'quam@hotmail.ca',
    },
    {
      time: new Date('Apr 9, 2021'),
      nights: 16,
      price: 60,
      contactPerson: 'Kennedy Newton',
      contactEmail: 'et.ultrices@protonmail.com',
    },
    {
      time: new Date('Jan 17, 2021'),
      nights: 13,
      price: 55,
      contactPerson: 'Tana Fields',
      contactEmail: 'felis.ullamcorper@aol.org',
    },
    {
      time: new Date('Sep 13, 2021'),
      nights: 9,
      price: 67,
      contactPerson: 'Chelsea Burke',
      contactEmail: 'nisi@aol.couk',
    },
    {
      time: new Date('Aug 6, 2021'),
      nights: 13,
      price: 66,
      contactPerson: 'Samantha Hood',
      contactEmail: 'ac.eleifend@outlook.ca',
    },
    {
      time: new Date('Jan 5, 2021'),
      nights: 11,
      price: 65,
      contactPerson: 'Chester Wooten',
      contactEmail: 'id.nunc.interdum@protonmail.net',
    },
    {
      time: new Date('Jun 8, 2021'),
      nights: 14,
      price: 69,
      contactPerson: 'Vaughan Hopkins',
      contactEmail: 'morbi.metus.vivamus@google.couk',
    },
    {
      time: new Date('Jan 28, 2021'),
      nights: 6,
      price: 58,
      contactPerson: 'Sydnee Montoya',
      contactEmail: 'donec.feugiat@protonmail.edu',
    },
    {
      time: new Date('Jun 4, 2021'),
      nights: 11,
      price: 73,
      contactPerson: 'Kelly Espinoza',
      contactEmail: 'ligula.donec@aol.com',
    },
    {
      time: new Date('May 18, 2021'),
      nights: 2,
      price: 70,
      contactPerson: 'Jonah Solis',
      contactEmail: 'orci.sem@google.couk',
    },
    {
      time: new Date('Jun 8, 2021'),
      nights: 3,
      price: 58,
      contactPerson: 'Denton Taylor',
      contactEmail: 'metus.urna@protonmail.couk',
    },
    {
      time: new Date('Feb 14, 2021'),
      nights: 4,
      price: 68,
      contactPerson: 'Keely Sutton',
      contactEmail: 'rutrum.non@hotmail.ca',
    },
    {
      time: new Date('May 17, 2021'),
      nights: 8,
      price: 67,
      contactPerson: 'Derek Meyer',
      contactEmail: 'posuere.enim.nisl@aol.org',
    },
    {
      time: new Date('Apr 18, 2021'),
      nights: 9,
      price: 73,
      contactPerson: 'Phelan Pena',
      contactEmail: 'ullamcorper.duis@google.net',
    },
    {
      time: new Date('Apr 3, 2021'),
      nights: 11,
      price: 71,
      contactPerson: 'Maxwell Morales',
      contactEmail: 'eu.nibh@outlook.ca',
    },
    {
      time: new Date('Aug 1, 2021'),
      nights: 6,
      price: 74,
      contactPerson: 'Hope Hines',
      contactEmail: 'rutrum.fusce@hotmail.couk',
    },
    {
      time: new Date('May 28, 2021'),
      nights: 11,
      price: 67,
      contactPerson: 'Cullen Woodward',
      contactEmail: 'luctus.et@protonmail.ca',
    },
    {
      time: new Date('Feb 5, 2021'),
      nights: 11,
      price: 63,
      contactPerson: 'Leah Tanner',
      contactEmail: 'neque.sed@icloud.couk',
    },
    {
      time: new Date('Sep 27, 2021'),
      nights: 15,
      price: 61,
      contactPerson: 'Fletcher Blair',
      contactEmail: 'non.bibendum@yahoo.edu',
    },
    {
      time: new Date('Mar 17, 2021'),
      nights: 15,
      price: 63,
      contactPerson: 'Jennifer Daugherty',
      contactEmail: 'ligula@yahoo.couk',
    },
    {
      time: new Date('Mar 29, 2021'),
      nights: 10,
      price: 66,
      contactPerson: 'Zeus Riggs',
      contactEmail: 'ac.metus.vitae@outlook.com',
    },
    {
      time: new Date('Jan 5, 2021'),
      nights: 6,
      price: 64,
      contactPerson: 'Chelsea Talley',
      contactEmail: 'nec.quam.curabitur@yahoo.net',
    },
    {
      time: new Date('May 12, 2021'),
      nights: 15,
      price: 71,
      contactPerson: 'Sara Key',
      contactEmail: 'elementum.lorem@aol.com',
    },
    {
      time: new Date('Jun 27, 2021'),
      nights: 4,
      price: 70,
      contactPerson: 'Uriel Mcconnell',
      contactEmail: 'curabitur.consequat@outlook.net',
    },
    {
      time: new Date('Jun 10, 2021'),
      nights: 10,
      price: 74,
      contactPerson: 'Molly Atkins',
      contactEmail: 'magna.et@protonmail.ca',
    },
    {
      time: new Date('Feb 11, 2021'),
      nights: 13,
      price: 66,
      contactPerson: 'Dieter Burnett',
      contactEmail: 'ac.ipsum.phasellus@google.net',
    },
  ];

  getGridData(): Observable<any[]> {
    this.gridData.forEach(
      (item: any) => (item.totalCost = item.nights * item.price)
    );
    return of(this.gridData);
  }
}
