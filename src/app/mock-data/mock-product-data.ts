import { Product } from '../domain-models/product';

export class MockData{
    public static Products:Product[]=[
        {
            id:101,
            title:'Mi note 4',
            modelName:'note 4',
            color:'golden',
            productType: 'phone',
            brand: 'Mi',
            price:9999
        },
        {
            id:105,
            title:'apple macbook',
            modelName:'macbook',
            color:'black',
            productType: 'laptop',
            brand: 'apple',
            price:100000
        }
    ];

}