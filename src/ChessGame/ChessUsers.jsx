import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ChessUsers = (props) => {
  const uName = useSelector((state) => state.username);

  const redirect = useNavigate();
  const [whitePlayer, setWhitePlayer] = useState(uName ? uName : "");
  const [blackPlayer, setBlackPlayer] = useState("");
  const dispatch = useDispatch();
  // const uName = useSelector((state) => state.username);
  //this was cool it auto inputted the name if they were already logged in which i think was sick
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit Button pressed");
    await axios
      .post("/game", {
        whitePlayer: whitePlayer,
        blackPlayer: blackPlayer,
      })
      .then((res) => {
        switch (res.data.message) {
          case "not a valid user for white player":
            alert(res.data.message);
            break;
          case "not a valid user for black player":
            alert(res.data.message);
            break;
          case "success have fun":
            dispatch({
              type: "success have fun",
              payload: {
                whitePlayer: res.data.whitePlayer,
                blackPlayer: res.data.blackPlayer,
                gameId: res.data.game.gameId,
              },
            }); //this was a axious request and i had to learn how to do switch cases but they make a lot more sense now
            // // console.log("success have fun");
            redirect("/chessApp");
            break;
          default:
            alert("problem");
        }
      });
  };

  return (
    <div className="authFormContainer">
      {/* userId: {uName ? uName : "None"} */}
      <form className="userForm" onSubmit={handleSubmit}>
        <h3>Which users are playing?</h3>

        <label htmlFor="username">White Player</label>
        <input
          value={whitePlayer}
          onChange={(e) => setWhitePlayer(e.target.value)}
          name="whitePlayer"
          placeholder="whitePlayer"
          id="whitePlayer"
        />
        <label htmlFor="blackPlayer">Black Player</label>
        <input
          value={blackPlayer}
          onChange={(e) => setBlackPlayer(e.target.value)}
          type="blackPlayer"
          name="blackPlayer"
          placeholder="blackPlayer"
          id="blackPlayer"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default ChessUsers;
