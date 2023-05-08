import { PrettyChatWindow} from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="2041396e-ab3f-4b60-b427-2572495bb2fd"
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
      />
    </div>
  );
};

export default ChatsPage;