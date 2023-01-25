export default function Heading(props) {
  return (
    <h2 class="inline-block relative font-semibold text-4xl tracking-wide before:w-3/5 before:absolute before:left-0 before:top-12 before:border-t-2 before:border-t-primary">
      {props.heading}
    </h2>
  );
};