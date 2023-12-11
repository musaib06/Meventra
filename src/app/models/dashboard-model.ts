export class dashboardData {
  lastestResultsArray: lastestResults[] = [];
  timeSpentDataObject: timeSpentData = new timeSpentData();
  userDataArray: userData[] = [];
  userDataObj: userData = new userData();
}

export class userData {
  id!: number;
  username: string = '';
  email: string = '';
  fullName: string = '';
  courcesData: courses = new courses();
  remindersArray: reminders[] = [];
}
export class courses {
  Maths: string = '';
  Spanish: string = '';
}

export class reminders {
  id!: number;
  datetime: string = '';
  description: string = '';
  title: string = '';
}

export class timeSpentData {
  averagePercentages: averagePercentages = new averagePercentages();
  averagePercentagesObj: averagePercentagesObj = new averagePercentagesObj();
  daysObj: daysObj = new daysObj();
  days: days = new days();
}
export class averagePercentages {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class averagePercentagesObj {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class days {
  mondayObj: monday = new monday();
  tuesdayObj: tuesday = new tuesday();
  wednesdayObj: wednesday = new wednesday();
  thursdayObj: thursday = new thursday();
  fridayObj: friday = new friday();
  saturdayObj: saturday = new saturday();
  sundayObj: sunday = new sunday();
}
export class daysObj {
  mondayObj: monday = new monday();
  tuesdayObj: tuesday = new tuesday();
  wednesdayObj: wednesday = new wednesday();
  thursdayObj: thursday = new thursday();
  fridayObj: friday = new friday();
  saturdayObj: saturday = new saturday();
  sundayObj: sunday = new sunday();
}

export class monday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class tuesday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class wednesday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class thursday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class friday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class saturday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}
export class sunday {
  Grammar!: number;
  Listening!: number;
  Vocabulary!: number;
  Writing!: number;
}

export class lastestResults {
  id!: number;
  quizTitle: string = '';
  score: string = '';
}
