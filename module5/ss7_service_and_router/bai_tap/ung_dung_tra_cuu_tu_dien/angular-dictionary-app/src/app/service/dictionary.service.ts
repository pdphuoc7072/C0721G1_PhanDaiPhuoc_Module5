import {Injectable} from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  words: IWord[] = [
    {
      word: 'one',
      mean: 'một'
    },
    {
      word: 'red',
      mean: 'màu đỏ'
    },
    {
      word: 'car',
      mean: 'xe ô tô'
    },
    {
      word: 'student',
      mean: 'học sinh'
    },
    {
      word: 'truck',
      mean: 'xe tải'
    }
  ];

  constructor() {
  }

  findAll() {
    return this.words;
  }

  translate(word: string | null): string {
    if (!word) {
      return '';
    }
    const wordTranslate = this.words.find(item => item.word === word.toLowerCase());
    if (wordTranslate) {
      return wordTranslate.mean;
    }
    return 'Not found';
  }
}
