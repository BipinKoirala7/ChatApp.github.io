import { useState, useEffect, memo } from "react";
import ChatBox from "./ChatBox";

function ChatMembers() {
    const [AdminChat, setAdminChat] = useState([]);
    useEffect(() => {
        async function fetchMembers() {
          const res = await fetch("https://randomuser.me/api/1.4/?results=15");
          const result = await res.json();
          const data = result.results.map((item) => {
            const date = new Date(item.dob.date);
            return {
              gender: item.gender,
              name: item.name.first + item.name.last,
              profession: "Senior Developer",
              location: {
                city: item.location.city,
                state: item.location.state,
                country: item.location.country,
                postCode: item.location.postcode,
                street: item.location.street,
              },
              login: {
                uuid: item.login.uuid,
                email: item.email,
                username: item.login.username,
                password: item.login.password,
              },
              DOB: {
                date: date.toLocaleDateString(),
                age: item.dob.age,
              },
              phone: item.phone,
              cell: item.cell,
              picture: item.picture,
              country: item.nat,
            };
          });
          AdminChat === [] ? "" : setAdminChat(data);
        }
        fetchMembers();
    })

    return  AdminChat.map((item,index) => <ChatBox obj={item} key={index} />)
}

export default memo(ChatMembers)