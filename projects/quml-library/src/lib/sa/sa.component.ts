import { Component, OnInit, Input, SecurityContext, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { katex } from 'katex';
import { shortAnswerQuestionData } from './data';

declare var katex: any;

@Component({
  selector: 'lib-sa',
  templateUrl: './sa.component.html',
  styleUrls: ['./sa.component.css', '../quml-library.component.css']
})
export class SaComponent implements OnInit {

  @Input() mcqData?: any;
  shortAnswerQuestion: string;
  ShortAnswerSolution: string;
  @Input() layout?: string;
  @Output() componentLoaded = new EventEmitter<any>();

  constructor(
    public domSanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    this.renderLatex();
    this.mcqData = this.mcqData ? this.mcqData : shortAnswerQuestionData;
    this.layout = this.layout ? this.layout : 'Default';
    this.shortAnswerQuestion = this.domSanitizer.sanitize
      (SecurityContext.HTML, this.domSanitizer.bypassSecurityTrustHtml(this.mcqData.result.assessment_item.body));
    this.ShortAnswerSolution = this.domSanitizer.sanitize(SecurityContext.HTML,
      this.domSanitizer.bypassSecurityTrustHtml(this.mcqData.result.assessment_item.solutions[0]));
      console.log('Data from Component', this.mcqData , this.layout);
      console.log('Questions and Answers', this.shortAnswerQuestion , this.ShortAnswerSolution);
  }

  renderLatex() {
    const _instance = this;
    setTimeout(function () {
      _instance.replaceLatexText();
    }, 0);
  }
  replaceLatexText() {
    const mathTextDivs = document.getElementsByClassName('mathText');
    for (let i = 0; i < mathTextDivs.length; i++) {
      const mathExp = mathTextDivs[i];
      const textToRender = mathExp.innerHTML;
      katex.render(textToRender, mathExp, { displayMode: false, output: 'html', throwOnError: true });
    }
  }

  switchLayout(stripData) {
    this.layout = stripData.text;
    this.renderLatex();
  }

}
