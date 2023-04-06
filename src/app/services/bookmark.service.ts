import { Injectable } from '@angular/core';
import { Link } from '../models/link';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Link[] = [];

  constructor() {}

  getBookmarks(): Link[] {
    return this.bookmarks;
  }

  addToBookmarks(bookmark: Link): Link[] {
    this.bookmarks.push(bookmark);
    return this.bookmarks;
  }

  clearBookmarks(): void {
    this.bookmarks = [];
  }
}
