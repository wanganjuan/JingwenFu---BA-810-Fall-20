import moment from 'moment';

export class DataFormatValueConverter{

    toView(value){
        if(value === undefined || value === null){
            return;
        }
        return moment(value).format('MM Do YYYY');
    }
}