import {Component, EventEmitter, Output} from '@angular/core';
import {File} from "@angular/compiler-cli/src/ngtsc/file_system/testing/src/mock_file_system";

/**
 * Komponente, die zum Upload von Dateien genutzt werden kann
 */
@Component({
  selector: 'cobra-upload',
  templateUrl: './cobra-upload.component.html',
  styleUrls: ['./cobra-upload.component.scss']
})
export class CobraUploadComponent {

  /**
   * Event für den Fall, dass eine neue Datei ausgewählt wurde
   */
  @Output()
  fileSelected = new EventEmitter<File>();

  /**
   * File, das aktuell selektiert ist
   * @private
   */
  private selectedFile?: File;

  onFileSelected($event: Event) {
    // @ts-ignore
    const files = $event.target.files;

    if (!files)
      return;

    this.selectedFile = files[0];


    // => Emit File selected
    this.fileSelected.emit(this.selectedFile);

  }

  /**
   * Gibt den Namen der ausgewählten Datei wieder
   */
  getFileName() {
    // @ts-ignore
    return this.selectedFile?.name;
  }
}
