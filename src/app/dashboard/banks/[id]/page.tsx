import Button from "@/common/Button";
import Typography from "@/common/Typography";
import { getBankById } from "@/services";
import { IDefaultPage } from "@/types";

interface IParams {
  id: number;
}

interface IProps extends IDefaultPage<IParams> {}

export default async function SingleBank({ params, ...x }: IProps) {
  console.log(1111, params, x);

  const bank = await getBankById(params.id);
  return (
    <div>
      <Typography variant="caption">
        <b>Name : </b>
        {bank.name}
      </Typography>
      <Typography variant="caption">
        <b>Slug :</b> {bank.slug}
      </Typography>
      <Typography variant="caption">
        <b>Is Active :</b> {bank.isActive ? "Enabled" : "Disabled"}
      </Typography>
      <Typography variant="caption">
        <b>Created At :</b> {new Date(bank.createdAt).toLocaleDateString()}
      </Typography>
      <Typography variant="caption">
        <b>Updated At :</b> {new Date(bank.updatedAt).toLocaleDateString()}
      </Typography>
    </div>
  );
}
