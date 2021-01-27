import React from "react";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
         <Chat 
              name="Laurent Caballero"
              message="¿Qué tal? 👍"
              timestamp="Hace 40 segundos"
              profilePic="https://i.ibb.co/QjyzXNR/l.jpg"
            />
            <Chat 
              name="Juan Fuentes"
              message="Me gustó mucho tu perfil! ✌️"
              timestamp="Hace 35 minutos" 
              profilePic="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.0-9/126931336_420440099087706_7788850346834726105_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=4vbYuuKHVFcAX-hGz4_&_nc_ht=scontent.fbga2-1.fna&oh=6291842d3dadfb3d1ce31e080d396bb6&oe=601472AD"
            />
            <Chat 
              name="Juan Pablo Viviescas"
              message="Hey amigo, ¿Cómo te va?"
              timestamp="Hace 3 horas"
              profilePic="https://scontent.fbga2-1.fna.fbcdn.net/v/t1.0-0/p526x296/130006918_10224132174037070_4681326754709529691_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=DeNBs6sh5icAX-T2ZJc&_nc_ht=scontent.fbga2-1.fna&tp=6&oh=df4bf179acea8e50e40d8404c8375fa9&oe=6015B38C"
            />
            <Chat 
              name="Sandra López"
              message="Hola! 😀"
              timestamp="Hace una semana"
              profilePic="https://pbs.twimg.com/profile_images/690750147400105985/L_DZvn7Y.jpg"
            />
    </div>
  );
};

export default Chats;
