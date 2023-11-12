"use client";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=740&t=st=1699164200~exp=1699164800~hmac=358cb1893cf03ca7bcef7b7fd177dfc3ce4f65caabd9ba08c34a00fd5d1d1916",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?w=740&t=st=1699164200~exp=1699164800~hmac=358cb1893cf03ca7bcef7b7fd177dfc3ce4f65caabd9ba08c34a00fd5d1d1916",
    address: "Some address 10, 34345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
