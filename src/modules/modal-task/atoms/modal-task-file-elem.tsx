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
        {/* <div className="ModalTaskFileElem__Image">
          <img
            src={
              props.file.url
                ? defURL + "/" + props.file.url
                : URL.createObjectURL(props.file)
            }
            alt={props.file.name}
          />
        </div> */}
        <div className="ModalTaskFileElem__Content">
          <div
            className="ModalTaskFileElem__Content__Name"
            // onClick={() => {
            //   props.file.url
            //     ? window.open(defURL + "/" + props.file.url, "_blank")
            //     : window.open(URL.createObjectURL(props.file));
            // }}
            onClick={() => {
              const url = props.file.url
                ? defURL + "/" + props.file.url
                : URL.createObjectURL(props.file);
              const a = document.createElement("a");
              a.href = url;
              a.download = props.file.name;
              a.click();
            }}
          >
            {props.file.name}
          </div>
          <button
            className="ModalTaskFileElem__Content__Delete"
            onClick={(e) => onRemoveBtnClick(e)}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  } else if (props.file) {
    return (
      <div className="ModalTaskFileElem">
        <div className="ModalTaskFileElem__Content">
          <div
            className="ModalTaskFileElem__Content__Name"
            // onClick={() => {
            //   props.file.url
            //     ? window.open(defURL + "/" + props.file.url, "_blank")
            //     : window.open(URL.createObjectURL(props.file));
            // }}
            onClick={() => {
              const url = props.file.url
                ? defURL + "/" + props.file.url
                : URL.createObjectURL(props.file);
              const a = document.createElement("a");
              a.href = url;
              a.download = props.file.name;
              a.click();
            }}
          >
            {props.file.name}
          </div>
          <button
            className="ModalTaskFileElem__Content__Delete"
            onClick={(e) => onRemoveBtnClick(e)}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};