/**
 * Local storage utility
 * Creates field in the local storage for project data
 * @class
 */
export class Storage {
  save<T>(key: string, value: T) {
    this.pack(key, value);
  }
  
  load(key: string, defaultValue: any): string | any {
    return typeof this.storageState(key) === 'undefined' ? defaultValue : this.storageState(key);
  }
  
  private unpack = (key: string): Record<string, unknown> =>
      JSON.parse(localStorage.getItem(key) || '{}');
  
  private pack = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  private storageState(key: string): Record<string, unknown> {
    return this.unpack(key);
  }
}

export default new Storage();
