import moment from 'moment-timezone';

export default class PingService {
  static getTime(): string {
    return moment.utc().format('YYYY-MM-DDTHH:mm:ssZ');
  }
}
