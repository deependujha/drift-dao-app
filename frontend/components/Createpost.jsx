import React from "react";
import { Button, TextInput, Label, Card, Textarea } from "flowbite-react";
import { useState } from "react";

const initialValues = {
  title: "",
  description: "",
};

const Createpost = () => {

    const [formdata, setformdata] = useState(initialValues);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setformdata({
        ...formdata,
          [name]: value,
        });
    };
    
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("data :", formdata);
    }

  return (
    <div className="max-w-4xl">
      <Card>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Proposal Title" />
            </div>
            <TextInput
              value={formdata.title}
              onChange={handleInputChange}
              name="title"
              type="email"
              required={true}
            />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Proposal Description" />
            </div>
            <Textarea
              id="comment"
              value={formdata.description}
              onChange={handleInputChange}
              name="description"
              placeholder="Elaborate Your Proposal..."
              required={true}
              rows={4}
            />
          </div>
          <Button
            onClick={formSubmit}
            className=" bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-bold rounded-xl"
            type="submit"
          >
            Create Proposal
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Createpost;
