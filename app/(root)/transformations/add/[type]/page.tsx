import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";

import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function AddTransformationTypePage({
  params: { type },
}: SearchParamProps) {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");
  const user = await getUserById(userId);
  const Transformation = transformationTypes[type];
  return (
    <>
      <Header title={Transformation.title} subtitle={Transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={Transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}
