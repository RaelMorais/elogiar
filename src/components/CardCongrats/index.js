import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img
          src="/img/elogiar_conecta_log.jpeg"
          alt="Imagem do Card"
          className="card-image"
        />
      </div>
      <div className="card-content">
        <h2 className="card-title">Fomos elogiados!</h2>
        <p className="card-text">
            🎉 Nosso projeto foi aplicado com sucesso na área e reconhecido durante o evento Conecta Log, realizado no dia 14/05!
Ficamos honrados com a homenagem recebida e emocionados com o presente especial entregue pela incrível equipe de LOM da @CaP! 💙
        </p>
      </div>
    </div>
  );
};

export default Card;
