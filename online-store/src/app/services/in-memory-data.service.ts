import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../interfaces/product';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const categories = [
      {
        id: 1, name: 'Consoles and games'
      },
      {
        id: 2, name: 'PC pereferia'
      },
      {
        id: 3, name: 'Laptops'
      },
      {
        id: 4, name: 'Smartphones'
      }
    ];
    const products = [
      {
        id: 1,
        name: 'Игровой консоль XBOX One ',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/d/4/d4c5cfc6b511d67d9d78b1a64cbfb339bb5ed20f_212095_12.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/9/298f49cb246e24892012e81caa51498671b053c7_212095_2.jpg',
        price: '144 990',
        description: 'Серия X-Box One S, Оперативная память ГБ8, Жесткий диск ГБ1000, ИнтерфейсEthernet, USB, HDMI, Bluetooth, AUX',
        category: 1
      },
      {
        id: 2,
        name: 'Игровой консоль Sony PlayStation4',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/0/206282a261b26d07641bca3c483247d0db758939_210814_1.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/a/a/aa64b086e1f18773cb2f0af88228d6036edb5479_210814_2.jpg',
        price: '169 990',
        description: 'СерияX-Box One S, Оперативная память ГБ8, Жесткий диск ГБ1000, Интерфейс USB, AUX, Ethernet, Bluetooth, HDMI, Wi-Fi',
        category: 1
      },
      {
        id: 3,
        name: 'Игровая консоль Nintendo Switch',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/d/c/dcc56f9527d350d736e703bb9d43f829f0179b0a_51557_1.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/c/9/c91b492249c0ce49ba02c6caff905f73d6a202d1_51557_3.jpg',
        price: '159 990',
        description: 'Серия Switch HW, Жесткий диск ГБ32, Интерфейс Bluetooth Wi-Fi USB Type-C USB',
        category: 1
      },
      {
        id: 4,
        name: 'Игровая консоль XBOX One S',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/1/91bb6c6c44e2bac86fe2f62171c7048d7302770a_175749.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/7/f7a1805c1771a2b59d49b084de43145f98ab28b3_188933_1.jpg',
        price: '19 990',
        description: 'Платформа PS4, ИздательRockstar Games, Язык Английский (русские субтитры), Возрастное ограничение 18+, Жанр Приключения Боевик',
        category: 1
      },
      {
        id: 5,
        name: 'Игровая консоль XBOX One X',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/2/7/277f9212a7c4692b70422a4da3c9cf06666de676_212096_1z.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/6/b/6b3e85e037829512286459b9fa4e78726796f43c_212096_2z.jpg',
        price: '167 990',
        description: 'СерияX-Box One X, Оперативная память ГБ12, Жесткий диск ГБ1000, Интерфейс Ethernet, USB, USB 3.1, HDMI, Wi-Fi',
        category: 1
      },



      {
        id: 6,
        name: 'Принтер струйный Epson L-805',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/6/b/6b708562eb3990bf42cc8cdb3f2d849ee3f2326a_8837890670622.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/1/b196a3c24d8b690c5ec84d13596d36381d421091_8837891424286.jpg',
        price: '122 990',
        description: 'Тип печати Цветная, Технология печати Струйная, Максимальный форматA4, Максимальное разрешение печати 5760х1440',
        category: 2
      },
      {
        id: 7,
        name: 'Картридж Canon 725',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/b/fbecd96b97e39ce5afbf103f6d096c84191cdc01_8943096791070.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/b/fbecd96b97e39ce5afbf103f6d096c84191cdc01_8943096791070.jpg',
        price: '4 990',
        description: 'Тип Картридж, Тип картриджа Лазерный, Тип печати картриджа Для черно-белого принтера, Ресурс картриджа (A4), листов 1600, СовместимостьДля Canon',
        category: 2
      },
      {
        id: 8,
        name: 'Принтер струйный Epson L-1110',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/b/2/b2bfbc833a8f72324b9453495e234bcdce0a8775_15916116017182.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/b/fbecd96b97e39ce5afbf103f6d096c84191cdc01_8943096791070.jpg',
        price: '69 990',
        description:'Тип Картридж, Тип картриджа Лазерный, Тип печати картриджа Для черно-белого принтера, Максимальный форматA4, Максимальное разрешение печати 5760х1440',
        category: 2
      },
      {
        id: 9,
        name: 'Принтер струйный Epson L-805',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/6/f6187903b47fe7cac47af2c88ac70c4af828f05a_15695684010014.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/e/0/e05082a9c100285ef97604317ba4f5da1e8c680c_15695685124126.jpg',
        price: '54 990',
        description: 'Тип печати Цветная, Технология печати Струйная, Максимальный форматA4, Максимальное разрешение печати 5760х1440',
        category: 2
      },
      {
        id: 10,
        name: 'МФУ струйное Canon PIXMA G-3415',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/f/9ffe73aeaee148983d0e3b1dd9ca6ce5e600c81b_12058300612638.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/4/a/4a4bfcc471744a95bb233754e1fbc7ed954b41b5_12058301661214.jpg',
        price: '70 990',
        description: 'Тип печати Цветная, Технология печати Струйная, Максимальный форматA4, Максимальное разрешение печати 5760х1440',
        category: 2
      },
      {
        id: 12,
        name: 'Apple MacBook Air i5 8ГБ',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/e/1/e1131f69804130901e27f8bf79931704afe42c93_15946584129566.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/c/9c81e2c1a2121050c3159117682d2b75d6768c4a_15946585243678.jpg',
        price: '549 990',
        description: 'oijh',
        category: 3
      },
      {
        id: 13,
        name: 'Apple MacBook Air i5 5350U',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/0/f/0f945d4eecce1af2994feba59b901b4ed365ba73_55123_1.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/9/a/9ae7521dacc2392c75425e2b9cd5cf1299379dbe_55123_2.jpg',
        price: '429 990',
        description: '',
        category: 3
      },
      {
        id: 14,
        name: 'ASUS LAPTOP X509UJ-EJ037TSLATE',
        image_src: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1626_2.jpg',
        image_2: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1626_0.jpg',
        price: '199 990',
        description: 'шгр',
        category: 3
      },
      {
        id: 15,
        name: 'ACER NITRO 5,AN515-54-5292',
        image_src: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1632_0.jpg',
        image_2: 'https://object.pscloud.io/cms/cms/Photo/img_0_62_1632_1.jpg',
        price: '419 490',
        description: '',
        category: 3
      },




      {
        id: 16,
        name: 'SAMSUNG GALAXY A40',
        image_src: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1891_0.jpg',
        image_2: 'https://object.pscloud.io/cms/cms/Photo/img_0_77_1891_1.jpg',
        price: '81 290',
        description: '64GB BLACK',
        category: 4
      },
      {
        id: 17,
        name: 'Смартфон Apple iPhone 6s',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/a/a/aa8d17548bdb1e5eb9b957715d0990bdded6bab4_187558_1.jpg',
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/c/9/c9dcd9a0a7d5bf08835a28a9824444c9f79489aa_187558_3.jpg',
        price: '150000',
        description: 'Диагональ дисплея дюйм 4.7, Разрешение дисплея 750x1334, Операционная система iOS 13',
        category: 4
      },
      {
        id: 18,
        name: 'Apple iPhone 11 128GB Black',
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/0/7/07a6f8712ee22e3ebd84e5555d283f5a3e780297_178275_1.jpg',
        // tslint:disable-next-line:max-line-length
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/c/9/c9c3803db300b43e8820f204cb7634f9fd1d3b2e_178275_5.jpg',
        price: '484 990',
        description: 'asdfg',
        category: 4
      },
      {
        id: 19,
        name: 'Apple iPhone XR 128GB White',
        // tslint:disable-next-line:max-line-length
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/1/6/16109ed3d07688b700076778ed47b8a61534c820_15662207369246.jpg',
        // tslint:disable-next-line:max-line-length
        image_2: 'data:image/jpeg;base64,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',
        price: '419 990',
        description: 'dsa',
        category: 4
      },
      {
        id: 20,
        name: 'Apple iPhone 7 Plus 128GB',
        // tslint:disable-next-line:max-line-length
        image_src: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/e/a/ea379c26faf734fb5aa1b1b8262c3eed6263b700_39726_1.jpg',
        // tslint:disable-next-line:max-line-length
        image_2: 'https://www.technodom.kz/media/catalog/product/cache/1366e688ed42c99cd6439df4031862c6/f/4/f457f0f30a60c970163b72f63b680323ac1284b3_39726_2.jpg',
        price: '299 990',
        description: 'oj',
        category: 4
      }
    ];
    return {categories, products};
  }

  genId<T extends Category | Product>(newStructure: T[]): number {
    return newStructure.length > 0 ? Math.max(...newStructure.map(n => n.id)) + 1 : 1;
  }

  constructor() { }
}
