import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor, EditorConfig } from "@ckeditor/ckeditor5-core";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { EventInfo } from "@ckeditor/ckeditor5-utils";
import { WatchdogConfig } from "@ckeditor/ckeditor5-watchdog/src/watchdog";
import { type InferProps } from "prop-types";

export interface ErrorDetails {
  phase: "initialization" | "runtime";
  willEditorRestart?: boolean;
}

export interface Props<TEditor extends Editor>
  extends InferProps<typeof CKEditor.propTypes> {
  editor: {
    create(...args: any): Promise<TEditor>;
  };
  config?: EditorConfig;
  watchdogConfig?: WatchdogConfig;
  disableWatchdog?: boolean;
  onReady?: (editor: TEditor) => void;
  onAfterDestroy?: (editor: TEditor) => void;
  onError?: (error: Error, details: ErrorDetails) => void;
  onChange?: (event: EventInfo, editor: TEditor) => void;
  onFocus?: (event: EventInfo, editor: TEditor) => void;
  onBlur?: (event: EventInfo, editor: TEditor) => void;
}

export interface TextAreaProps extends Props<ClassicEditor> {
  label: string;
  maxLenght: number;
  characters: number;
}
