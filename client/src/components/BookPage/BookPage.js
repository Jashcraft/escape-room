import React from "react";
import { useQueryParams } from "../../utils/hooks/useQueryParams";
import BookeoWidget from "../RoomPage/BookeoWidgetPirate";

const BookPage = () => {
  const query = useQueryParams();
  const type = query.get("type");
  return (
    <BookeoWidget
      url={`https://bookeo.com/widget.js?a=3150HYKPLT1830A9B3FAF${
        type ? `&type=${type}` : ""
      }`}
    />
  );
};

export default BookPage;
