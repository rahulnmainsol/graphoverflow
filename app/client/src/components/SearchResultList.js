import React from "react";

import SearchResultQuestionItem from "./SearchResultQuestionItem";
import SearchResultAnswerItem from "./SearchResultAnswerItem";

const SearchResultList = ({ posts, searchTerm }) => {
  return (
    <ul className="list-unstyled search-result-list">
      {posts.map(post => {
        if (post.Type === "Question") {
          return (
            <SearchResultQuestionItem
              question={post}
              searchTerm={searchTerm}
              key={post._uid_}
            />
          );
        } else {
          return (
            <SearchResultAnswerItem
              answer={post}
              searchTerm={searchTerm}
              key={post._uid_}
            />
          );
        }
      })}
    </ul>
  );
};

export default SearchResultList;
