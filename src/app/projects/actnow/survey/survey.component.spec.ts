import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { QuestionnaireComponent } from './questionnaire.component'
import { QuestionListComponent } from './question-list/question-list.component'
import { QuestionItemComponent } from './question-item/question-item.component'
import { MaterialModule } from '../material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { QuestionnaireHelperProvider } from '../../providers/questionnaire-helper/questionnaire-helper-provider'
import { ApiServiceProvider } from '../../providers/api-service/api-service-provider'
import { StorageServiceProvider } from '../../providers/storage-service/storage-service-provider'

describe('QuestionnaireComponent', () => {
  let component: QuestionnaireComponent
  let fixture: ComponentFixture<QuestionnaireComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionnaireComponent,
        QuestionListComponent,
        QuestionItemComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        ApiServiceProvider,
        StorageServiceProvider,
        QuestionnaireHelperProvider,
      ],
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
