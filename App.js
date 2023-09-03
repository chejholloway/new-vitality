import * as React from 'react'
import { useListMessagesQuery } from './services/messages'
import { generateKeyID, sortAscending, sortDescending, } from './utils/index;

export default function App() {
  const [page, setPage] = useState(1);
  const { data: messages, isLoading, isFetching } = useListMessagesQuery(page);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!messages?.data) {
    return <div>No messages :(</div>;
  }

  return (
    <div>
        <button 
		  onClick={() => sortAscending(messages)}>
          Sort Asc
        </button>
        <button
          onClick={() => sortDescending(messages)}>
         Next
        </button>	
        {messages.data.map(({ content, senderUuid, sentAt }) => (
          <div key={generateKeyID()}>
			{ content } <br/>
			{ senderUuid } <br/>
			{ sentAt.toUTCString() }
		  </div>
        ))}
        <button 
		  onClick={() => setPage(page - 1)} 
		  isLoading={isFetching}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          isLoading={isFetching}
        >
         Next
        </button>
    </div>
  );
}