import { FaTrash } from 'react-icons/fa';

type ClientRowProps = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};

const ClientRow = ({ client }: ClientRowProps) => {
  return (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-sm btn-danger'>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
