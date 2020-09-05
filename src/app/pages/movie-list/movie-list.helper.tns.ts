import * as dialogs from '@nativescript/core/ui/dialogs';

export class MovieListHelper {
  static showDeleteConfirmation(message: string): Promise<boolean> {
    return dialogs.confirm({
      title: 'Excluir Filme',
      message,
      okButtonText: 'Excluir',
      cancelButtonText: 'Manter Filme'
    });
  }
}
