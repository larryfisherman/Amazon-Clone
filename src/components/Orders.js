import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { selectUser } from "../store/userSlice";
import { useSelector } from "react-redux";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState([]);
  const user = useSelector(selectUser);

  console.log(user);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log("orders", orders);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
