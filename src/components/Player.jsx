import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		setIsEditing((prevState) => !prevState);
	}

	function handleChange(event) {
		console.log(event);
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
	}

	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
};

export default Player;
