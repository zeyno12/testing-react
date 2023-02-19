import React, { useState } from "react";
import { Button, Container, Grid, Item } from "semantic-ui-react";
import imageblue from "../../image/photo-1676191774019-d56599896fd7.avif";
import imageCompression from 'browser-image-compression';

const Pagess = () => {
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const handle = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
  };

  const handleCompressedImage = (e) => {
    e.preventDefault();

    const option = {
      maxSizeMB: 1,
      maxWidhtORHeight: 350,
      useWebWorker: true,
    };
    if(option.maxSizeMB>= origImage/1024){
    alert("image cant be compressed")
    return 0
    }
    let output;
    imageCompression(origImage,option).then((x)=>{
    output=x;
    const donloadLink=URL.createObjectURL(output)
    setCompressedImage(donloadLink)
    })
  };

  return (
    <>
      <h1></h1>
      <Container>
        <Grid>
          <Grid.Column widht={6}></Grid.Column>
          <Item>
            {origImageFile ? (
              <img
                src={origImageFile}
                style={{ width: "250px", marginTop: "4rem" }}
              />
            ) : (
              <img
                src={imageblue}
                style={{ width: "250px", marginTop: "4rem" }}
              />
            )}
          </Item>
          <Grid.Column widht={4}>
            <input
              type="file"
              accept="image/"
              className="mt-2 btn btn-dark w-100"
              onChange={(e) => handle(e)}
            />
            <h1></h1>
            {origImageFile && (
              <Button
                primary
                onClick={(e) => {
                  handleCompressedImage(e);
                }}
              >
                Compressed Image
              </Button>
            )}
            <h1></h1>
            {compressedImage && <Button primary>
                <a href={compressedImage} download={fileName} style={{ color:"white" }}>
                    {" "}
                    Downloand Image
                </a>
                </Button>}
          </Grid.Column>
          <Grid.Column widht={6}>
            <Item>
              {compressedImage ? (
                <img
                  src={compressedImage}
                  style={{ width: "250px", marginTop: "4rem" }}
                />
              ) : (
                <img
                  src={imageblue}
                  style={{ width: "250px", marginTop: "4rem" }}
                />
              )}
            </Item>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
export default Pagess;
