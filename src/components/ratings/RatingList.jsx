import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import RatingItem from "./RatingItem";

function Ratings({ feedback, handleDelete }) {
  return (
    <div>
      <AnimatePresence>
        {feedback.map((item) => 
          
          <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity:0}}>
              <RatingItem key={item.id} item={item} handleDelete={handleDelete} /> ;
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}

export default Ratings;


//installed npm i framer-motion@4.1.17 for the delete review animation