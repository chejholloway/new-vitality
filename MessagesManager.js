const PostList = () => {
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
        {messages.data.map(({ content, senderUuid, sentAt }) => (
          <div key={Math.floor((Math.random()*100000) + 1)}>
			{ content } <br/>
			{ senderUuid } <br/>
			{ sentAt.toUTCString() }
		  </div>
        ))}
        <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
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
};