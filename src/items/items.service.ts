import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


// Injectable allow us to inject dependencies into a constructor.

@Injectable()
export class ItemsService {

    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    // monggoose return a promise 
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
      }

    // findAll(): Item[] {
    //     return this.items;
    // }

    // mongoDB alway give an _id which is an object 
   async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

    // create item in our database

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
      }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    }

    // findOne(id: string): Item {
    //     return this.items.find(item => item.id === id);
    // }


    // Hard coded data as an example
    // private readonly items: Item[] = [
    //     {
    //         id: '1',
    //         name: 'Item One',
    //         description: 'This is the first item',
    //         qty: 1,
    //     },
    //     {
    //         id: '2',
    //         name: 'Item Two',
    //         description: 'This is the second item',
    //         qty: 1,
    //     }
    // ];



}
