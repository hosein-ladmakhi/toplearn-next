import Avatar from '@/common/Avatar';
import Typography from '@/common/Typography';
import SingleUserAction from '@/components/users/SingleUserAction';
import { getUserById } from '@/services';
import { IDefaultPage } from '@/types';

export interface IProps extends IDefaultPage<{ id: number }> {}

export default async function UsersByIdPage({ params }: IProps) {
  const user = await getUserById(params.id);

  return (
    <div>
      <Avatar path={user.image?.name} />
      <Typography variant="caption">
        <b>Email</b> : {user.email}
      </Typography>
      <Typography variant="caption">
        <b>Username</b> : {user.username}
      </Typography>
      <Typography variant="caption">
        <b>FirstName</b> : {user.firstName || 'Not Provided'}
      </Typography>
      <Typography variant="caption">
        <b>LastName</b> : {user.lastName || 'Not Provided'}
      </Typography>
      <Typography variant="caption">
        <b>Phone</b> : {user.phone || 'Not Provided'}
      </Typography>
      <Typography variant="caption">
        <b>Created At</b> : {new Date(user.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="caption">
        <b>Updated At</b> : {new Date(user.updatedAt).toLocaleDateString()}
      </Typography>
      <Typography variant="caption">
        <b>Bio</b> : {user.bio}
      </Typography>
      <Typography variant="caption">
        <b>Status</b> : {user.status}
      </Typography>
      <Typography variant="caption">
        <b>Credit</b> : {user.credit}
      </Typography>
      <SingleUserAction user={user} />
    </div>
  );
}
