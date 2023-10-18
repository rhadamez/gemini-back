interface TaskProps {
  id?: number;
  description: string;
  done?: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
}

export class Task {
  private props: TaskProps;

  constructor(props: TaskProps) {
    this.props = {
      ...props,
      done: props.done ?? false,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  static create(description: string): Task {
    return new Task({ description });
  }

  set id(id: number) {
    this.props.id = id;
  }

  get id(): number | undefined {
    return this.props.id;
  }

  get description(): string {
    return this.props.description;
  }

  set description(description: string) {
    this.props.description = description;
    this.updated();
  }

  set done(done: boolean) {
    this.props.done = done;
    this.updated();
  }

  get done(): boolean {
    return this.props.done;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date | null {
    return this.props.updatedAt;
  }

  private updated(): void {
    this.props.updatedAt = new Date();
  }
}
