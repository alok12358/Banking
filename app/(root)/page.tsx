import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
 

const Home = () => {
  const loggedIn = {firstName: 'Alok Patel',email: 'alokpatel1944@gmail.com'};

  return(
    <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox
               type="greeting"
               title="Wlcome"
               user={loggedIn ?.firstName || 'Guest'}
               subtext ="Access and manage your account and transactions efficiently."
               />
               <TotalBalanceBox 
               accounts={[]}
               totalBanks={1}
               totalCurrentBalance={1250.35}
               
               />

              
            </header>
            RECENT TRANSACTION
        </div>
        <RightSidebar
            user={loggedIn}
            transaction={[]}
            banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
            />
    </section>
  )
   
}

export default Home;
