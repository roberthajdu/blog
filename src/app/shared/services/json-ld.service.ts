import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonLdService {
  static scriptType = 'application/json+ld';
  static websiteSchema = (url?: string, name?: string) => {
    return {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: url || 'https:\/\/hajdurobert.hu',
      name: name || 'Hajdu Róbert',
    };
  };

  static orgSchema = () => ({
    '@context':
      'https://schema.org',
    '@type':
      'Organization',
    url:
      'https://hajdurobert.hu',
    name:
      'Hajdu Róbert',
    contactPoint: {
      '@type':
        'ContactPoint',
      telephone:
        '+36302890979',
      contactType:
        'Customer service'
    }
  });

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  removeStructuredData(): void {
    const els: Element[] = [];
    ['structured-data', 'structured-data-org'].forEach(c => {
      els.push(...Array.from(this._document.head.getElementsByClassName(c)));
    });
    els.forEach(el => this._document.head.removeChild(el));
  }

  insertSchema(schema: Record<string, any>, className = 'structured-data'): void {
    let script: HTMLScriptElement;
    let shouldAppend = false;
    if (this._document.head.getElementsByClassName(className).length) {
      script = <HTMLScriptElement>this._document.head.getElementsByClassName(className)[0];
    } else {
      script = this._document.createElement('script');
      shouldAppend = true;
    }
    script.setAttribute('class', className);
    script.type = JsonLdService.scriptType;
    script.text = JSON.stringify(schema);
    if (shouldAppend) {
      this._document.head.appendChild(script);
    }
  }

}
