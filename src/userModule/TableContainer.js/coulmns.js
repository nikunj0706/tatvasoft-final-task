const columns = 
     [
       {
        title: 'Profile Image',
        dataIndex: 'picture',
        key: 'picture',
        render: (picture, record) => <img src={picture.thumbnail} alt={record.name.first} />
       },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (obj) => `${obj.title} ${obj.first} ${obj.last}`
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
            // render: (location) => location.state
          },
        {
          title: 'City',
          dataIndex: 'location',
          key: 'city',
          render: (location) => location.state
        },
        {
          title: 'State',
          dataIndex: 'location',
          render: (location) => location.state,
          key: 'state',
        },
      ];

export default columns;