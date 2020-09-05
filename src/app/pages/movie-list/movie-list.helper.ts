import { resolve } from "url";

export class MovieListHelper {
  static showDeleteConfirmation(message: string): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        resolve(confirm(message));
      }
    );
  }
}
