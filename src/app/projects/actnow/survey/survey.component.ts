import { Component, OnInit } from '@angular/core';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public questions: number[] = [0,0,0]

  updateQ(ch: MatRadioChange) {
    let bt: MatRadioButton = ch.source;
    this.questions[Number(bt.name)] = ch.value;
    console.log(this.questions[Number(bt.name)]);
  }

  constructor() { }

  ngOnInit(): void {
  }
}