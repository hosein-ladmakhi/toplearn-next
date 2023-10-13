import Avatar from "@/common/Avatar";
import Typography from "@/common/Typography";
import ProfileReportCard from "@/components/profile/ProfileReportCard";
import { currencyFormat, numberFormat } from "@/helpers";
import { userProfile } from "@/services/user";
import {
  AiOutlineUser as AiOutlineUserIcon,
  AiTwotonePhone as AiTwotonePhoneIcon,
  AiOutlineMail as AiOutlineMailIcon,
  AiOutlineDollar as AiOutlineDollarIcon,
  AiFillAppstore as AiFillAppstoreIcon,
  AiFillLike as AiFillLikeIcon,
  AiFillVideoCamera as AiFillVideoCameraIcon,
  AiOutlinePieChart as AiOutlinePieChartIcon,
} from "react-icons/ai";
import { BsPen as BsPenIcon } from "react-icons/bs";

export const generateMetadata = async () => {
  const profile = await userProfile();
  return {
    title: profile?.username || "Profile Page",
  };
};

export default async function ProfilePage() {
  const profile = await userProfile();

  return (
    <div className="flex justify-start items-start gap-3 flex-wrap">
      <div className="card border-2 border-gray-500 lg:card-side shadow-xl p-5 w-full lg:w-5/12 relative overflow-hidden">
        <div className="absolute top-3 right-3 h-10 w-10 flex justify-center items-center bg-gray-800 rounded-full">
          <BsPenIcon />
        </div>
        <Avatar path={profile?.image?.name} />
        <div className="card-body p-0 lg:px-5 mt-5 lg:mt-0">
          <Typography variant="caption">
            <div className="flex justify-start items-center flex-wrap">
              <AiOutlineUserIcon className="hidden md:inline" fontSize={20} />
              <b className="lg:ml-2">Username</b>: {profile?.username}
            </div>
          </Typography>
          <Typography variant="caption">
            <div className="flex justify-start items-center">
              <AiOutlineMailIcon className="hidden md:inline" fontSize={20} />
              <b className="lg:ml-2">Email</b>: {profile?.email}
            </div>
          </Typography>
          <Typography variant="caption">
            <div className="flex justify-start items-center">
              <AiTwotonePhoneIcon className="hidden md:inline" fontSize={20} />
              <b className="lg:ml-2">Phone</b>: {profile?.phone}
            </div>
          </Typography>
        </div>
      </div>
      <div className="hidden lg:w-2/12 lg:flex p-10"></div>
      <div className="hidden lg:w-2/12 lg:flex p-10"></div>
      <ProfileReportCard
        icon={<AiOutlineUserIcon fontSize={50} />}
        items={[
          {
            text: "All Members",
            value: "20",
          },
          {
            text: "Disabled Members",
            value: "0",
          },
          {
            text: "Enabled Members",
            value: "20",
          },
        ]}
      />
      <ProfileReportCard
        icon={<AiOutlineDollarIcon fontSize={50} />}
        items={[
          {
            text: "Current Year Salary",
            value: currencyFormat(1000),
          },
          {
            text: "Current Month Salary",
            value: currencyFormat(500),
          },
          {
            text: "Today Salary",
            value: currencyFormat(100),
          },
        ]}
      />
      <ProfileReportCard
        icon={<AiFillAppstoreIcon fontSize={50} />}
        items={[
          {
            text: "In Sale Courses",
            value: numberFormat(50),
          },
          {
            text: "Done Courses",
            value: numberFormat(50),
          },
          {
            text: "Pre Sale Courses",
            value: numberFormat(1000),
          },
        ]}
      />
      <ProfileReportCard
        icon={<AiFillLikeIcon fontSize={50} />}
        items={[
          {
            text: "Total Likes",
            value: numberFormat(100000),
          },
          {
            text: "Total DisLikes",
            value: numberFormat(500),
          },
          {
            text: "Total Balance",
            value: numberFormat(400),
          },
        ]}
      />
      <ProfileReportCard
        icon={<AiFillVideoCameraIcon fontSize={50} />}
        items={[
          {
            text: "All Videos",
            value: numberFormat(50),
          },
          {
            text: "Pending Videos",
            value: numberFormat(500),
          },
          {
            text: "In Process Videos",
            value: numberFormat(1200),
          },
        ]}
      />
      <ProfileReportCard
        icon={<AiOutlinePieChartIcon fontSize={50} />}
        items={[
          {
            text: "Current Month Viewers",
            value: numberFormat(50),
          },
          {
            text: "Current Week Viewers",
            value: numberFormat(500),
          },
          {
            text: "Current Day Viewers",
            value: numberFormat(1200),
          },
        ]}
      />
    </div>
  );
}
