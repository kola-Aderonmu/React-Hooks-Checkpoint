import React, { useState } from "react";
import { Button, Modal, message, Input, Rate } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator";

const { TextArea } = Input;

const CreateNewMovie = ({ setmyMovies, setRandom, memorizedMovies }) => {
  const [movieInfor, setMovieInfor] = useState({
    id: Math.random(),
    title: "",
    description: "",
    postUrl: "",
    rating: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleInput = (event) => {
    const { id, value } = event.target;
    setMovieInfor((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
    console.log(movieInfor);
  };

  const handleRate = (value) => {
    setMovieInfor((preValue) => ({
      ...preValue,
      rating: value,
    }));
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    // Validate movie url;
    if (!validator.isURL(movieInfor.postUrl)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid posterURL url",
      });
      return;
    }

    // Validate movie title;
    if (validator.isEmpty(movieInfor.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid movie title",
      });
      return;
    }

    // Validate movie rating;
    if (movieInfor.rating < 1) {
      messageApi.open({
        type: "error",
        content: "Please rate a movie",
      });
      return;
    }

    // Validate movie desction;
    if (validator.isEmpty(movieInfor.description)) {
      messageApi.open({
        type: "error",
        content: "Please movie description",
      });
      return;
    }

    messageApi.open({
      type: "success",
      content: "Movie Added Successfully",
    });

    setmyMovies((preValue) => [
      movieInfor,
      ...memorizedMovies.myMemorizedMovies,
    ]);

    setRandom(Math.random);

    setMovieInfor({
      id: Math.random(),
      title: "",
      description: "",
      postUrl: "",
      rating: "",
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <VideoCameraAddOutlined />
        Add New Movie
      </Button>
      <Modal
        title="➕ Add Movies"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ backgroundColor: "tan" }}
      >
        {contextHolder}
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Input Movie Poster Url (http://)"
            id="postUrl"
            onChange={handleInput}
            value={movieInfor.postUrl}
          />
          <div>
            <Input
              placeholder="Movie Title"
              id="title"
              onChange={handleInput}
              value={movieInfor.title}
            />

            <div className="p-4 shadow-md w-fit my-4">
              <h4 className="mb-2">Rate Movie</h4>
              <Rate onChange={(value) => handleRate(value)} defaultValue={1} />
            </div>
          </div>

          <Input.TextArea
            rows={4}
            placeholder="Movie decription"
            id="description"
            onChange={handleInput}
            value={movieInfor.description}
          />
        </div>
      </Modal>
    </>
  );
};
export default CreateNewMovie;
