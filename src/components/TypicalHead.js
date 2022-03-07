import Typical from "react-typical";
import React from 'react';

function TypicalHead(){
    return (
      <div className="text-center my-4">
                  <h3>
          <Typical
            loop={Infinity}
            steps={[
              "Top Headlines - Apna News",
              1000,
            ]}
          />
        </h3>
      </div>
    )
}

export default TypicalHead
