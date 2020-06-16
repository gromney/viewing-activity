export class TimeSpent {
    days: number =0;
    hours: number =0;
    minutes: number=0;

    noResult(){
        return (this.days + this.hours + this.minutes) !== 0;
    }
}
