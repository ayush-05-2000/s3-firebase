import React, { useState } from "react";
import { Button, Typography, Box, Container, LinearProgress, IconButton, Tooltip } from "@mui/material";
import { CloudUpload as CloudUploadIcon, AttachFile as AttachFileIcon } from "@mui/icons-material";
import AWS from "aws-sdk";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // AWS S3 configuration
  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_S3_REGION,
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);
    setProgress(0); 

    const params = {
      Bucket: process.env.REACT_APP_S3_BUCKET_NAME,
      Key: file.name,
      Body: file,
    };

    s3.upload(params)
      .on("httpUploadProgress", (event) => {
        setProgress(Math.round((event.loaded / event.total) * 100));
      })
      .send((err, data) => {
        setUploading(false);
        if (err) {
          console.error("File upload failed", err);
          alert("File upload failed.");
        } else {
          console.log("File uploaded successfully", data);
          alert("File uploaded successfully!");
          setFile(null);
        }
      });
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: "50px", textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Upload Your File
        </Typography>
        <Typography variant="body1" gutterBottom>
          Choose a file to upload
        </Typography>

        {/* Styled file input */}
        <Tooltip title="Attach file">
          <IconButton color="primary" component="label" sx={{ marginBottom: "20px" }}>
            <AttachFileIcon fontSize="large" />
            <input hidden type="file" onChange={handleFileChange} />
          </IconButton>
        </Tooltip>

        {/* Display file name */}
        {file && (
          <Typography variant="subtitle1" sx={{ marginBottom: "10px" }}>
            Selected: {file.name}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<CloudUploadIcon />}
          onClick={handleFileUpload}
          disabled={uploading || !file}
          sx={{ marginBottom: "20px" }}
        >
          {uploading ? "Uploading..." : "Upload File"}
        </Button>

        {/* Progress Bar */}
        {uploading && (
          <Box sx={{ width: "100%", marginBottom: "20px" }}>
            <LinearProgress variant="determinate" value={progress} />
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              Uploading... {progress}%
            </Typography>
          </Box>
        )}

        {/* Upload success/failure message */}
        {!uploading && !file && (
          <Typography variant="body2" color="textSecondary">
            No file selected. Please attach a file.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default FileUpload;
