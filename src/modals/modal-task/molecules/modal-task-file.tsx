import { useCallback, useEffect, useState } from "react";
import React from "react";

import { ModalTaskFileElem } from "../atoms/modal-task-file-elem";

export const useFiles = (defaultState: File[] = []) => {
  const [files, setFiles] = useState<File[]>(defaultState);

  const onAddFiles = useCallback((files: File[]) => {
    setFiles((prev) => [...files, ...prev]);
  }, []);

  const onRemoveFile = useCallback((file: File) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  }, []);

  const onResetFiles = useCallback(() => {
    setFiles([]);
  }, []);

  return {
    files,
    setFiles,
    onAddFiles,
    onRemoveFile,
    onResetFiles,
  };
};
interface IModalTaskFile {
  files: File[];
  onAddFiles: (files: File[]) => void;
  onRemoveFile: (file: File) => void;
  onResetFiles?: () => void;
  accept?: string;
  acceptAlert?: boolean;
  multiple?: boolean;
  id?: string;
  clearFilesBtnClassName?: string;
  children?: React.ReactNode;
}
export const ModalTaskFile = (props: IModalTaskFile) => {
  const [drag, setDrag] = useState(false);
  const [acceptedTypes, setAcceptedTypes] = useState<string[]>([]);

  useEffect(() => {
    setAcceptedTypes(() => props.accept?.replace(/\s+/g, "").split(",") ?? []);
  }, [props.accept]);

  const getFilesWithAcceptedTypes = (currentFiles: File[]) => {
    // Возвращает только те файлы, которые имеют допустимый тип
    if (!props.accept) return currentFiles;
    currentFiles = currentFiles.filter((f) => {
      // Фильтрация файлов по типу
      const fileType = "." + f.name.split(".").pop(); // Получаем тип файла
      if (acceptedTypes?.includes(fileType)) {
        // Проверяем, включают ли допустимые типы полученный тип файла
        return f;
      } else {
        return null;
      }
    });
    return currentFiles;
  };

  const addFiles = (currentFiles: FileList | null) => {
    // Добавление файлов в список
    if (!currentFiles || !currentFiles.length) return;

    const fileArray = getFilesWithAcceptedTypes(Array.from(currentFiles));
    if (props.multiple) {
      props.onAddFiles(fileArray);
    } else {
      if (!props.files?.length) {
        props.onAddFiles([fileArray[0]]);
      }
    }
  };

  const resetFiles = () => {
    if (props.onResetFiles) props.onResetFiles();
  };

  const onDragHandler = (e: React.DragEvent, dragState: boolean) => {
    e.preventDefault();
    setDrag(dragState);
  };

  const onDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    addFiles(e.dataTransfer.files);
    setDrag(false);
  };

  return (
    <div id={props.id} className="ModalTaskFile">
      {props.files?.length && props.onResetFiles && props.files[0] ? (
        <div
          onClick={resetFiles}
          className={props.clearFilesBtnClassName ?? "ModalTaskFile__Clear"}
          style={{ marginBottom: "5px" }}
        >
          Очистить файлы
        </div>
      ) : null}
      <div className="ModalTaskFile__Content">
        <label
          htmlFor={props.id}
          className={
            drag
              ? "ModalTaskFile__Content__Browse__Area ModalTaskFile__Content__Browse__Area-Active"
              : "ModalTaskFile__Content__Browse__Area"
          }
          onDragStart={(e) => onDragHandler(e, true)}
          onDragLeave={(e) => onDragHandler(e, false)}
          onDragOver={(e) => onDragHandler(e, true)}
          onDrop={(e) => onDropHandler(e)}
        >
          {props.children ?? (
            <div className="ModalTaskFile__Content__Browse__Hint">
              Выберите файлы или перетащите файлы сюда
            </div>
          )}
          {props.accept ? (
            props.acceptAlert ? (
              <p className="ModalTaskFile__Content__Browse__Notice">
                Разрешены только файлы типов {props.accept.split(",")}
              </p>
            ) : null
          ) : null}
          {props.multiple ? null : (
            <p className="ModalTaskFile__Content__Browse__Notice">
              Можно загрузить только 1 файл
            </p>
          )}
        </label>
        {props.files?.map((file, index) => {
          return (
            <ModalTaskFileElem
              key={index}
              file={file}
              removeFileHandler={props.onRemoveFile}
            />
          );
        })}
      </div>
      <input
        type="file"
        accept={props.accept}
        style={{ display: "none" }}
        id={props.id}
        onChange={(e) => {
          addFiles(e.target.files);
          e.target.value = "";
        }}
        multiple={props.multiple}
      />
    </div>
  );
};
