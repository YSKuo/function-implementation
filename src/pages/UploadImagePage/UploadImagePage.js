import React, { useState, memo, useCallback } from "react";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import Container from "../../components/Container";
import Button from "../../components/Button";
import { MEDIA_QUERY_MD } from "../../constants/style";

const StyledContainer = styled(Container)`
  && {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }
`;

const UploadButtonContainer = styled.div`
  && {
    align-self: center;

    ${MEDIA_QUERY_MD} {
      align-self: flex-start;
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const FileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0;

  ${MEDIA_QUERY_MD} {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.darkGray};
  border-radius: 4px;
  background-image: ${(props) => props.src};
  height: 500px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

function UploadImagePage() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleOnChange = useCallback((e) => {
    const file = e.target.files.item(0);
    const fileReader = new FileReader();
    if (!file) {
      return;
    }

    const { name } = file; // 取出檔名

    fileReader.addEventListener("load", (e) => {
      setImage(e.target.result);
      setFileName(name);
    });
    fileReader.readAsDataURL(file);
  }, []);

  return (
    <StyledContainer
      maxWidthAtPhoneSize="100vw"
      maxWidthAtDeskTopSize="90vw"
      paddingAtPhoneSize="16px"
      defaultBorder="true"
      defaultHeight="true"
    >
      <UploadButtonContainer>
        <Input
          accept="image/*"
          id="upload-file"
          type="file"
          onChange={handleOnChange}
        />
        <label htmlFor="upload-file">
          <Button variant="contained" component="span">
            上傳圖片
          </Button>
        </label>
      </UploadButtonContainer>
      <FileNameContainer>
        <Typography component="span">檔案名稱：</Typography>
        <Typography component="span">{fileName}</Typography>
      </FileNameContainer>
      {image && <ImageContainer src={`url(${image})`} />}
    </StyledContainer>
  );
}

export default memo(UploadImagePage);
