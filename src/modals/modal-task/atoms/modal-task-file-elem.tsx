interface IModalTaskFileElem {
  file: File & { url?: string };
  removeFileHandler: (file: File) => any;
}
export const ModalTaskFileElem = (props: IModalTaskFileElem) => {
  const defURL = "";
  const onRemoveBtnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    props.removeFileHandler(props.file);
  };
  if (props.file?.name.match(/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i)) {
    // Проверка, является ли файл картинкой
    return (
      <div className="ModalTaskFileElem">
        <div className="ModalTaskFileElem__">
          <img
            src={
              props.file.url
                ? defURL + "/" + props.file.url
                : URL.createObjectURL(props.file)
            }
            alt={props.file.name}
          />
        </div>
        <div className="img-header">
          <div
            className="file-name"
            onClick={() => {
              props.file.url
                ? window.open(defURL + "/" + props.file.url, "_blank")
                : window.open(URL.createObjectURL(props.file));
            }}
          >
            {props.file.name}
          </div>
          <button
            className="remove-file-btn"
            onClick={(e) => onRemoveBtnClick(e)}
          >
            <RemoveButtonFilling />
          </button>
        </div>
      </div>
    );
  } else if (props.file) {
    return (
      <div className="file-preview-elem">
        <div className="doc-preview-container">
          <div>
            <i className="fal fa-file doc-icon-container"></i>
          </div>
          <div
            onClick={() => {
              props.file.url
                ? window.open(defURL + "/" + props.file.url, "_blank")
                : window.open(URL.createObjectURL(props.file));
            }}
            className="file-name"
          >
            {props.file.name}
          </div>
          <button
            className="remove-file-btn"
            onClick={(e) => onRemoveBtnClick(e)}
          >
            <RemoveButtonFilling />
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

const RemoveButtonFilling = () => {
  return (
    <div className="remove-file-filling-container">
      <span className="remove-file-filling-elem left" />
      <span className="remove-file-filling-elem right" />
    </div>
  );
};
